import PropTypes from "prop-types";
//css코드를 javascript오브젝트로 변환시켜줌
import styles from "./Button.module.css" 

function Button({ text }) {    //css 모듈러
    return <button className={styles.btn}>{text}</button>;
}
Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button; // appjs 에서 button을 가져올 수 있게 함
