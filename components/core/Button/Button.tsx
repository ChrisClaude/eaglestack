import * as React from 'react';
import { default as cn } from 'classnames';
import s from './Button.module.scss';

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  /** The children element(s) of the component */
  children?: React.ReactNode;
  /** Specifies the component variant to render */
  variant: 'contained' | 'outlined';
  /** Specifies the HTML element to render */
  as?: E;
};

type PrimaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
  /** Indicate primary variant of the button */
  primary: boolean;
  /** Indicate secondary variant of the button */
  secondary?: never;
  /** Indicate dark variant of the button */
  dark?: never;
  /** Indicate light variant of the button */
  light?: never;
};

type SecondaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
  /** Indicate secondary variant of the button */
  secondary: boolean;
  /** Indicate primary variant of the button */
  primary?: never;
  /** Indicate dark variant of the button */
  dark?: never;
  /** Indicate light variant of the button */
  light?: never;
};

type DarkButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
  /** Indicate dark variant of the button */
  dark: boolean;
  /** Indicate primary variant of the button */
  primary?: never;
  /** Indicate secondary variant of the button */
  secondary?: never;
  /** Indicate light variant of the button */
  light?: never;
};

type LightButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
  /** Indicate light variant of the button */
  light: boolean;
  /** Indicate primary variant of the button */
  primary?: never;
  /** Indicate secondary variant of the button */
  secondary?: never;
  /** Indicate dark variant of the button */
  dark?: never;
};

type ButtonProps<E extends React.ElementType> =
  | PrimaryButtonProps<E>
  | SecondaryButtonProps<E>
  | DarkButtonProps<E>
  | LightButtonProps<E>;

/**
 * This method switches between classes required for different button variant (contained or outlined) and styles (e.g: primary, secondary, etc...).
 * */
const switchButtonClassesVariant = (
	key: string,
	variant: 'contained' | 'outlined',
) => {
	let result = '';
	if (variant === 'outlined') {
		switch (key) {
			case 'primary':
				result = ' text-primary hover:bg-primary';
				break;
			case 'secondary':
				result = ' text-secondary hover:bg-secondary';
				break;
			case 'light':
				result = ' text-light hover:bg-light hover:text-dark';
				break;
			case 'dark':
				result = ' text-dark hover:bg-dark';
				break;
			default:
				result = '';
		}
	} else if (variant === 'contained') {
		switch (key) {
			case 'primary':
				result = ' bg-primary text-white';
				break;
			case 'secondary':
				result = ' bg-secondary text-white';
				break;
			case 'light':
				result = ' bg-light text-dark';
				break;
			case 'dark':
				result = ' bg-dark text-white';
				break;
			default:
				result = '';
		}
	}
	
	return result;
};

const createClassNames = (
	classes: { [key: string]: boolean },
	variant: 'contained' | 'outlined' | undefined,
): string => {
	let className = 'relative py-3 px-9 rounded-md focus:outline-none';

	// eslint-disable-next-line no-restricted-syntax
	for (const [key, value] of Object.entries(classes)) {
		if (value) {
			className += switchButtonClassesVariant(key, variant);
		}
	}

	return className.trim();
};

const defaultElement = 'button';

const RippleCircle = ({ top, left }: { top: number; left: number }) => <span className={s.circle} style={{
	top: `${top}px`,
	left: `${left}px`,
}} />;

// TODO: This is not rendering as expect in production
const Button = <E extends React.ElementType = typeof defaultElement>({
	children,
	primary = false,
	secondary = false,
	dark = false,
	light = false,
	variant,
	as,
	className,
	onClick,
}: ButtonProps<E>) => {
	const styles = createClassNames(
		{ primary, secondary, dark, light },
		variant,
	);
	const TagName = as || defaultElement;
	const [showRippleCircle, setShowRippleCircle] = React.useState(false);
	const [top, setTop] = React.useState(0);
	const [left, setLeft] = React.useState(0);

	const runRippleEffect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const x = event.pageX;
		const y = event.pageY;

		// @ts-ignore
		const buttonTop = event.target.offsetTop;
		// @ts-ignore
		const buttonLeft = event.target.offsetLeft;


		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const circle = document.createElement('span');
		circle.classList.add(s.circle);
		circle.style.top = `${yInside  }px`;
		circle.style.left = `${xInside  }px`;

		setTop(yInside);
		setLeft(xInside);

		if (!showRippleCircle) {
			setShowRippleCircle(true);

			setTimeout(() => {
				setShowRippleCircle(false);
			}, 500);
		}
	};

	return (
		<TagName className={cn(styles, className, s.ripple)}
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				runRippleEffect(event);
				if (onClick) {
					onClick(event);
				}
			}}>
			{children}
			{showRippleCircle && <RippleCircle top={top} left={left} />}
		</TagName>
	);
};


export default Button;
