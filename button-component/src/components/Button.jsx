import classNames from 'classnames'
import React from 'react'

import './button.css'

import '@mui/icons-material';

const Button = ({text, variant, size, color, startIcon, endIcon,onlyIcon, disable, disableShadow, roundedFull}) => {

    const variants={
        "variantDefault": variant==="default",
        "variantOutline": variant==="outline",
        "variantOutlineDefault": variant==="outline" && color === "default",
        "variantOutlinePrimary": variant==="outline" && color === "primary",
        "variantOutlineSecondary": variant==="outline" && color === "secondary",
        "variantOutlineDanger": variant==="outline" && color === "danger",
        "variantText": variant==="text",
        "variantTextDefault": variant==="text" && color === "default",
        "variantTextPrimary": variant==="text" && color === "primary",
        "variantTextSecondary": variant==="text" && color === "secondary",
        "variantTextDanger": variant==="text" && color === "danger",
    }

    const sizes={
        "sizeSM": size ==="sm",
        "sizeMD": size ==="md",
        "sizeLG": size ==="lg"
    }

    const colors={
        "colorDefault": color === "default",
        "colorPrimary": color === "primary",
        "colorSecondary": color === "secondary",
        "colorDanger": color === "danger"
    }


    const options={
        "disableShadow": disableShadow,
        "disable": disable,
        "disableDefault": disable && variant === "default" && color === "default",
        "disablePrimary": disable && variant === "default" && color === "primary",
        "disableSecondary": disable && variant === "default" && color === "secondary",
        "disableDanger": disable && variant === "default" && color === "danger",

        "disableOutlineDefault": disable && variant === "outline" && color === "default",
        "disableOutlinePrimary": disable && variant === "outline" && color === "primary",
        "disableOutlineSecondary": disable && variant === "outline" && color === "secondary",
        "disableOutlineDanger": disable && variant === "outline" && color === "danger",

        "disableTextDefault": disable && variant === "text" && color === "default",
        "disableTextPrimary": disable && variant === "text" && color === "primary",
        "disableTextSecondary": disable && variant === "text" && color === "secondary",
        "disableTextDanger": disable && variant === "text" && color === "danger",

        "roundedFull": roundedFull,
    }

  return (
    <button className={`items-center flex justify-center text-center ${classNames('btn', variants, sizes, colors, options)}`}>
        <span className={classNames({
        "inline-block": true,
        "mr-2": text && !onlyIcon,
        "!hidden": !startIcon
    })}> {startIcon} </span>

        {!onlyIcon && text}

        <span className={classNames({
        "inline-block": true,
        "ml-2": text && !onlyIcon,
        "!hidden": !endIcon
    })}> {endIcon} </span>
        </button>
  )

}

Button.defaultProps = {
  text: "Default",
  variant: "default",
  size: "md",
  color: "default"
}

export default Button