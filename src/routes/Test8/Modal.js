import { cssModal } from "./style"

const Modal = (props) => {
  const { form, onReset } = props

  return (
    <div className={cssModal}>
      Name: {form.name}
      <br/>
      Age: {form.age}
      <br/>
      Address: {form.address}
      <br/>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Modal;
