export const TextArea = ({ label, value, setValue }) => (
  <>
    <div className="form-group mb-3">
      <label htmlFor="value">{label}</label>
      <textarea
        type="text"
        name="value"
        id="value"
        className="form-control"
        rows="6"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  </>
);
