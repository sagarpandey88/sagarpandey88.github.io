import React from 'react';

interface StaggerProps {
  children: React.ReactNode;
  start?: number;
}

export function Stagger({ children, start = 1 }: StaggerProps) {
  const items = React.Children.toArray(children);

  return (
    <>
      {items.map((child, idx) => {
        const delay = String(start + idx);

        if (React.isValidElement(child)) {
          const existing = (child.props && (child.props as any).className) || '';
          return React.cloneElement(child as React.ReactElement<any>, {
            className: `${existing} reveal-child`,
            'data-delay': delay,
            key: (child as any).key ?? idx,
          } as any);
        }

        // Wrap primitives
        return (
          <span key={idx} className="reveal-child" data-delay={delay}>
            {child}
          </span>
        );
      })}
    </>
  );
}

export default Stagger;
