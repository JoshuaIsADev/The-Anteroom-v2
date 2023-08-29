import className from 'classnames';

function Button({ children, navigation, add, remove, ...rest }) {
  const classes = className(rest.className, {
    'nav-tab': navigation,
    'button-delete': remove,
    'button-add': add,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
