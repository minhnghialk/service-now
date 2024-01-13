import { ConfirmationResult, UserCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import OtpInput from "./OtpInput";

interface VerifyOtpModalProps {
  open: boolean;
  onClose?: () => void;
  confirmationResult: ConfirmationResult | null;
}

const VerifyOtpModal = (props: VerifyOtpModalProps) => {
  const navigate = useNavigate();

  if (!props.open) return null;

  const handleCloseModal = () => {
    props?.onClose?.();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if success -> redirect to /sign-in-role
    // if failure -> show error toast

    const form = event.target as HTMLFormElement;

    // get number from six inputs
    const code1 = form["code-1"].value;
    const code2 = form["code-2"].value;
    const code3 = form["code-3"].value;
    const code4 = form["code-4"].value;
    const code5 = form["code-5"].value;
    const code6 = form["code-6"].value;

    const otpNumbers = [code1, code2, code3, code4, code5, code6];
    // [1,2,3,4,5,6]
    // [1,2,undefined,4,"",6] => [1,2,4,6]

    const isValid = await handleVerifyOtpCode(
      otpNumbers.filter((item) => item)
    );

    if (isValid) {
      navigate("role");
    } else {
      // TODO: show error toast here
      console.log("handleVerifyOtpCode Failed");
    }
  };

  const handleVerifyOtpCode = async (
    otpNumbers: number[]
  ): Promise<boolean> => {
    if (otpNumbers.length != 6) return false;
    if (!props.confirmationResult) return false;

    // TODO: make api request to verify otp numbers
    const otpString = otpNumbers.join("");
    console.log("test otpString", otpString);

    try {
      const userCredential: UserCredential =
        await props.confirmationResult.confirm(otpString);

      // User signed in successfully.
      const { user } = userCredential;
      // TODO: store user in redux
      console.log(user);

      return true;
    } catch (error) {
      console.log("User couldn't sign in (bad verification code?)", error);
    }

    return false;
  };

  return (
    <div className="flex flex-col items-center">
      <img width={100} height={100} src="/otp-icon.png" alt="" />

      <h1>ENTER VERIFICATION CODE OTP</h1>

      <p>Please enter the verification code sent to your mobile phone</p>

      <form onSubmit={handleSubmit}>
        <OtpInput fieldLabel="First code" fieldName="code-1" />
        <OtpInput fieldLabel="Second code" fieldName="code-2" />
        <OtpInput fieldLabel="Third code" fieldName="code-3" />
        <OtpInput fieldLabel="Fourth code" fieldName="code-4" />
        <OtpInput fieldLabel="Fivth code" fieldName="code-5" />
        <OtpInput fieldLabel="Sixth code" fieldName="code-6" />

        <button type="submit">Confirm</button>
      </form>

      <div>
        <span>If you didn't get a code?</span>
        <span>
          <a href="#">Click to resend.</a>
        </span>
      </div>
    </div>
  );
};
export default VerifyOtpModal;
