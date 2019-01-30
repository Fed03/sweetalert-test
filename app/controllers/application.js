import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  swal: inject(),

  actions: {
    foo() {
      this.swal.open();
    }
  }
});
