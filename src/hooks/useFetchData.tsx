import { API } from "@/services/API";
import { useQuery } from "@tanstack/react-query";

function useFetchData<T>(url: string | null) {
  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => {
      if (!url) throw new Error("URL is null");
      const res = await API.get<T>(url);
      return res.data;
    },
    enabled: !!url,
  });
}

export default useFetchData;
