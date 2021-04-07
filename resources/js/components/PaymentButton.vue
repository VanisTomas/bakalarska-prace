<template>
  <div class="col-sm-4">
    <div ref="paypal"></div>
  </div>
</template>

<script>
export default {
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?currency=CZK&buyer-country=CZ&client-id=AfcyXOQF72j1pPhfhlQ2X8eDtm_OZpbvlqyVgdJ7tfDPYqCB1gwbbuVZnDtD2D1gEJ3OtS8qhm5phSGk';
    script.addEventListener('load', this.paypalInit);
    document.body.appendChild(script);
  },
  methods: {
    paypalInit() {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.payment.description,
                amount: {
                  currency_code: 'CZK',
                  value: this.payment.amount
                }
              }
            ]
          });
        },
        onApprove: async (data, actions, resp) => {
          const order = await actions.order.capture();
          this.$emit('success');
        },
        onError: err => {
          this.$emit('error');
        }
      }).render(this.$refs.paypal);
    }
  }
}
</script>
