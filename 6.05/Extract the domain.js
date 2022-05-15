//Extract the domain name from a URL
function domainName(url){
    url = url.replace(/((http)s?:\/\/)?(www\.)?/g,"");
    url = url.slice(0,url.indexOf("."));
    return url;
  }