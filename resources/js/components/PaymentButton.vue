<template>
  <div class="col-sm-4">
    <div ref="paypal"></div>
  </div>
</template>

<script>
import config from '../config';
import Paypal from '../apis/Paypal';

export default {
  props: {
    orderHash: {
      type: String,
      required: true
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?buyer-country=CZ&currency=CZK&client-id=' + config.paypal_client_id;
    script.addEventListener('load', this.paypalInit);
    document.body.appendChild(script);
  },
  methods: {
    paypalInit() {
      window.paypal.Buttons({
        createOrder: async () => {
          const response = await Paypal.createOrder({ orderHash: this.orderHash });
          return response.data.result.id;
        },
        onApprove: async (data) => {
          await Paypal.captureOrder({ orderId: data.orderID });
          this.$emit('success');
        },
        onError: () => {
          this.$emit('error');
        }
      }).render(this.$refs.paypal);
    }
  }
}
</script>
