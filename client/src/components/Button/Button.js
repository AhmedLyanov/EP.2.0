import style from './Button.module.css'

function Button({title, textColor, color, switchBackground, ...otherProps}) {

  title = title || 'Добавить'
  textColor = textColor || 'white';
  color = color || '#339933';
  return (
    <button 
      className={`${style.btn_elem} ${switchBackground && style.switch_background}`}
      style={!switchBackground ? {color: textColor, backgroundColor: color} : {}}
      {...otherProps}
    >
      {title}
    </button>
  )
}

export default Button