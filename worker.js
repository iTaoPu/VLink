addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 设置跨域头，允许你的 GitHub Pages 域名访问
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  // 数据部分：实际应用中可以放在 Cloudflare KV 中实现动态修改
  const links = [
    { title: "爱范儿官网", url: "https://www.ifanr.com" },
    { title: "玩物志", url: "https://coolbuy.com" },
    { title: "AppSo", url: "https://www.ifanr.com/app" },
    { title: "官方微博", url: "https://weibo.com/ifanr" },
    { title: "关注公众号", url: "https://mp.weixin.qq.com/..." }
  ];

  return new Response(JSON.stringify(links), {
    headers: corsHeaders
  });
}
