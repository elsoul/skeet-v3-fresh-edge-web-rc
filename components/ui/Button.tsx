import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils.ts'
import { JSX } from 'preact'

const buttonVariants = cva(
  'font-bold text-sm tracking-tight hover:opacity-70 transition-opacity',
  {
    variants: {
      variant: {
        default: 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950',
        outline:
          'border border-zinc-400 text-zinc-700 dark:border-white dark:text-white',
        error: 'bg-red-500 text-white dark:bg-red-700',
        warning: 'bg-yellow-500 text-white dark:bg-yellow-700',
      },
      buttonType: {
        default: 'px-4 py-2 rounded-lg flex flex-row',
        icon: 'p-2 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      buttonType: 'default',
    },
  },
)

interface ButtonProps
  extends
    JSX.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: preact.ComponentChildren
  buttonType?: 'default' | 'icon'
}

const Button = ({ variant, buttonType, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      class={cn(buttonVariants({ variant, buttonType }), props.class)}
    >
      {children}
    </button>
  )
}

export default Button
