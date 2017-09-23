import {FreelanceChannelServiceService} from './services/FreelanceChannelService.service';
import {SettingServiceService} from './services/SettingService.service';
import { ContextService } from './services/context.service'
import { APIService } from './services/API.service'

angular.module('app.services')
	.service('FreelanceChannelServiceService', FreelanceChannelServiceService)
	.service('SettingServiceService', SettingServiceService)
  .service('ContextService', ContextService)
  .service('API', APIService)
