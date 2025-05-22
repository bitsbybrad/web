export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

const base = 'px-4 py-2 rounded  text-sm font-medium transition';
const variants = {
  default: 'bg-blue-500 text-white hover:opacity-20',
  outline: 'border border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
};

export const Button: React.FC<IButton> = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
