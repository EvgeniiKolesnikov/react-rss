import './Loader.scss';

interface Props {
  status: LoadStatus;
}

export enum LoadStatus {
  loading = 'loading',
  loaded = 'loaded',
  failed = 'There is nothing here. Try another query',
}

export default function Loader({ status }: Props) {
  const message = <div className="loader">{status}</div>;
  const spinner = (
    <svg className="spinner" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  );

  return status === LoadStatus.failed ? message : status === LoadStatus.loading ? spinner : <></>;
}
