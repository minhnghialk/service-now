import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase";
import VerifyOtpModal from "./components/VerifyOtpModal";

const PhoneSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isVerifyOtpModalOpen, setIsVerifyOtpModalOpen] = useState(false);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const handleUpdatePhoneInput = (value?: string | undefined) => {
    if (!value) return;
    setPhoneNumber(value);
  };

  const handleSendOtpCode = async (phoneNumber: string) => {
    console.log("handleSendOtpCode-phoneNumber", phoneNumber);

    if (!phoneNumber) return;

    // create firebase captcha
    const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    // display a modal for filling out received otp code
    setIsVerifyOtpModalOpen(true);
    try {
      // process send otp to mobile device
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );

      console.log("confirmationResult", confirmationResult);
      setConfirmationResult(confirmationResult);
    } catch (error) {
      console.error("Lỗi khi gửi OTP:", error);
      setIsVerifyOtpModalOpen(false);
      // TODO: show error message
    }
  };

  return (
    <>
      <div className="signin-form">
        <img src="/servicenow-logo.png" />

        <h1>Welcome to Service Now!</h1>
        <h3>Enter your phone number to sign in</h3>

        <PhoneInput
          defaultCountry="VN"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handleUpdatePhoneInput}
          limitMaxLength={true}
        />

        <button onClick={() => handleSendOtpCode(phoneNumber)}>
          Send verification code
        </button>
        <div id="recaptcha-container"></div>
      </div>

      <VerifyOtpModal
        open={isVerifyOtpModalOpen}
        onClose={() => setIsVerifyOtpModalOpen(false)}
        confirmationResult={confirmationResult}
      />
    </>
  );
};

export default PhoneSignIn;
