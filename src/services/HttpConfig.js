//SS: Configuration for react application.

//SS: Azure AD configuration.
const clientIds = [
  {
    url: "https://localhost:44417",
    id: "6c829ca7-6a78-4480-aa77-685ff43f1cba",
  },
  {
    url: "https://web.trudoc24x7.com",
    id: "84de88cb-cfab-40e8-85de-3ce6bc6b95e5",
  },
  {
    url: "https://trudocgroup.com",
    id: "4bda48eb-22cd-4339-9ade-ca5cbd810221",
  },
];

//SS: build and return required variables.
export const initConfig = (baseUrl = "", clientId = "") => {
  if (!baseUrl) baseUrl = window.location.origin.toLowerCase();

  if (!clientId) {
    var client = clientIds.find((item) => baseUrl == item.url);
    if (client) clientId = client.id;
  }

  return {
    redirectUri: baseUrl + "/dashboard",
    clientId: clientId,
    authority: "https://login.microsoftonline.com/common",
    baseUrl: baseUrl,
    postLogoutRedirectUri: window.location.origin,
  };
};
