import axios from "axios";

const TABLE_ID = `appMPDyS7z5C6dIiS`;

export const airtable = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `https://api.airtable.com/v0/${TABLE_ID}`
      : `https://hc-airtable-caching-proxy.netlify.app/api/v1/airtable/${TABLE_ID}`,
  headers:
    process.env.NODE_ENV === "development"
      ? {
          Authorization: `Bearer patCMqNApPrJE8SXi.143baa8db7f29e133b886a0c24776496d00671e7ac993231593b78a2cfe599a6`,
        }
      : undefined,
});
