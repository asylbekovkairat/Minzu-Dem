export const sendNotification = async (
  fromName: string,
  fromEmail: string,
  message?: string
) => {
  try {
    await fetch("https://api.mynotifier.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        apiKey: "64ea6f78-e37e-4786-bf6b-6914d4455214",
        message: `New message from ${fromName}! Their Email - ${fromEmail}`,
        description: `Message: ${message || "empty"}`,
        body: "asd",
        type: "success",
        project: "",
      }),
    }).then((res) => res.json());
  } catch (error: any) {
    throw new Error(error);
  }
};
