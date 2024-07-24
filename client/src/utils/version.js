export default function version(url) {
  if (window.app_version) {
    return url + "?id=" + window.app_version;
  } else {
    return url;
  }
}
