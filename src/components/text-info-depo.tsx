import { useEffect, useState } from "react";

interface props {
  message: string;
}

const TextInfoDepo: React.FC<props> = ({ message }) => {
  const [messageText, setMessageText] = useState<string[]>(message.split("\n"));

  useEffect(() => {
    setMessageText(message.split("-"));
  }, [message]);



  return (
    <div className="text-info-depo">
      <i className="fa fa-info"></i>
      <div className="text">
        {messageText?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default TextInfoDepo;
