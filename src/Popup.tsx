import "./Popup.css";

type Props = { children: React.ReactNode; isOpen: boolean };

const Popup = ({ children, isOpen }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="popup">
      <div className="popup_inner">{children}</div>
    </div>
  );
};

export default Popup;
