import React from 'react';

interface MainLayoutProps {
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    // <div className={clsx('wrapper', className)}>
    //   {!hideMenu && (
    //     <div className="leftSide">
    //       <LeftMenu />
    //     </div>
    //   )}
    //   <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
    //   {!hideComments && (
    //     <div className="rightSide">
    //       <SideComments />
    //     </div>
    //   )}
    // </div>
    <></>
  );
};
