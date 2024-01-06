import { getRequest, postRequest, deleteRequest, putRequest } from "@/lib/http";
import { useMutation, useQuery, useQueryClient } from "react-query";

export type Page = {
  _id: string;
  title: string;
  icon: string;
  parent: string;
  createdAt: string;
  __v: number;
};

export async function getPages(parentId?: string) {
  return getRequest<Page[]>("/api/v1/pages", { parentId });
}

export function useGetPages(parentId?: string) {
  return useQuery<Page[]>({
    queryKey: ["pages", parentId],
    queryFn: () => getPages(parentId),
  });
}

export function useCreatePage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (page: Partial<Page>) => postRequest<Page>("/api/v1/pages", page),
    onSuccess: () => queryClient.invalidateQueries(["pages"]),
  });
}

export function useUpdatePage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (page: Partial<Page>) => putRequest<Page>(`/api/v1/pages/${page._id}`, page),
    onSuccess: () => queryClient.invalidateQueries(["pages"]),
  });
}

export function useDeletePage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (pageId: string) => deleteRequest<Page>(`/api/v1/pages/${pageId}`),
    onSuccess: () => queryClient.invalidateQueries(["pages"]),
  });
}
