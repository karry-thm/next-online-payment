"use server"

export default async function Home() {
  return <div>
    <h1>Erster payment Versuch</h1>
    <p>Kaufen sie unseren Wüstenfön!</p>
    <hr />
    <img src="buy.png" />
    <hr />
    <a href="https://www.sandbox.paypal.com/ncp/payment/QKMB8YWWCYT6N">Jetzt kaufen</a>
    <hr />
    <div dangerouslySetInnerHTML={{__html: `
        <script src="https://www.paypal.com/sdk/js?client-id=BAAHoQ7g85Rt5-3mB21CvomdBTG_uqsCcFPCbedUit14Km6aG6P16NRwdbpgHVeCguiAnD-F9sb-B731jQ&components=hosted-buttons&disable-funding=venmo&currency=EUR"></script>
          <div id="paypal-container-QKMB8YWWCYT6N"></div>
          <script>
            paypal.HostedButtons({
              hostedButtonId: "QKMB8YWWCYT6N",
            }).render("#paypal-container-QKMB8YWWCYT6N")
        </script>
      `}}
    />
  </div>
}
