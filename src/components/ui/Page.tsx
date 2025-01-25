interface PageProps {
  className?: string;
  children: React.ReactNode;
}

const Page = ({ className, children }: PageProps) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export { Page }
