export const useLinkClasses = () => {
  const router = useRouter();
  const currentRoute = computed(() => router.currentRoute.value.path);

  const getLinkClasses = (path) =>
    path === currentRoute.value ? "gears-link active" : "gears-link";

  return { getLinkClasses };
};
