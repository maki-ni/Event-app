import { Link } from "react-router-dom"
function FormBase({ title, fields, onSubmit, test, redirectLocation,error, buttonText }) {
    return (
        <form className="form-base" onSubmit={onSubmit}>
            <h2 className="form-h2">{title}</h2>
            {test && <Link to={redirectLocation} className="text-blue-900/80 text-xs text-center  mb-2">{test}</Link>}
            {error && <div className="text-red-700 text-sm text-center mb-2">{error}</div>}
                {fields.map(({ label, ...inputProps }) => (
                    
                    <label key={inputProps.id} className="form-label" htmlFor={inputProps.id}>
                        {label}
                        <input className="form-input" {...inputProps} />
                    </label>
                    
                ))}
            <button type="submit" className="form-button">{buttonText}</button>
        </form>
    )
}
export default FormBase;