import { Loader } from "../common/Loader";

interface WithLoader {
  isLoading: boolean;
  loaderWidth: string;
  [x: string]: any;
}

function withLoader(Component: any) {
  return ({ isLoading, loaderWidth }: WithLoader) => {
    return (
      <>
        {isLoading && <Loader width={loaderWidth} />}
        <Component />
      </>
    );
  };
}

export default withLoader;
