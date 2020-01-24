function doNotify() {
  const notification = {
    title: "Basic Notification",
    body: "This is an Electron notification"
  };
  const myNotification = new window.Notification(
    notification.title,
    notification
  );
}
