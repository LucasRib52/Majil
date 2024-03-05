import style from "./Desenvolvido.module.css";
import { CodeSimple } from "@phosphor-icons/react";

export function Desenvolvido() {
  return (
    <div className={style.Desenvolvido}>
      <CodeSimple size={24} color="#fff" />
      <h4>Desenvolvido por Lucas Cardoso &copy; {new Date().getFullYear()}</h4>
    </div>
  );
}