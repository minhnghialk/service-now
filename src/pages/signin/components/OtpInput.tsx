interface Props {
  fieldName: string;
  fieldLabel: string;
}

const OtpInput = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.fieldName} className="sr-only">
        {props.fieldLabel}
      </label>
      <input
        type="text"
        maxLength={1}
        name={props.fieldName}
        className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
    </div>
  );
};

export default OtpInput;
