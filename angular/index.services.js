import {InvoiceService} from './services/Invoice.service';
import {CustomerService} from './services/Customer.service';
import {FreelanceChannelServiceService} from './services/FreelanceChannelService.service';
import {SettingServiceService} from './services/SettingService.service';
import { ContextService } from './services/context.service'
import { APIService } from './services/API.service'

angular.module('app.services')
	.service('InvoiceService', InvoiceService)
	.service('CustomerService', CustomerService)
	.service('FreelanceChannelServiceService', FreelanceChannelServiceService)
	.service('SettingServiceService', SettingServiceService)
  .service('ContextService', ContextService)
  .service('API', APIService)
