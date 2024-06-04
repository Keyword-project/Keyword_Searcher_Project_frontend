import SkeletonContainer from "components/feature/result/SkeletonContainer";
import ExcelDownloader from "./ExcelDownloader";
import ResultTable from "./ResultTable";
import FetchData from "api/route";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Result({
  resultVisible,
  setResultVisible,
}: {
  resultVisible: boolean;
  setResultVisible: (value: boolean) => void;
}) {
  const { pathname } = useLocation();
  const url = new URL(window.location.href);
  const queryString = url.search;

  const apiURL = `http://keywordloadbalancing-508301448.ap-northeast-2.elb.amazonaws.com/api/v1${pathname}${queryString}`;

  const { error, isError, data, refetch, isFetching } = FetchData(apiURL);
  useEffect(() => {
    refetch();
    setResultVisible(true);
  }, [queryString]);

  const searchData = data;

  if (isFetching) return <SkeletonContainer />;

  if (isError) {
    throw error;
  }
  return (
    <>
      {resultVisible && (
        <>
          {" "}
          <ExcelDownloader searchData={searchData} />
          <ResultTable searchData={searchData} />
        </>
      )}
    </>
  );
}
