export const formatUpdatedDate = (date: string) => {
    return (
      new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }) +
      " (" +
      new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }) +
      ")"
    );
  };