export const fetchApiData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      next: { revalidate: 7200 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};
