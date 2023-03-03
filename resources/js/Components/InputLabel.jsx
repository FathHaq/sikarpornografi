export default function InputLabel({className = '', name, label, children}) {
    return (
        <div className={`text-gray-700 my-3 flex flex-col gap-1` + className}>
            <label htmlFor={name} >{label}</label>
            {children}
        </div>
    );
}
