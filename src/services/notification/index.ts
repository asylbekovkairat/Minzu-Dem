export const sendNotification = async (fromName: string, fromEmail: string) => {
  try {
    await fetch("https://api.mynotifier.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        apiKey: "6a02bcfa-c05f-4b0e-911d-55c79e361fba",
        message: `New message from ${fromName}! Their Email - ${fromEmail}`,
        description: "Hurry up and check it!",
        body: "asd",
        type: "success",
        project: "",
      }),
    }).then((res) => res.json());
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
};
