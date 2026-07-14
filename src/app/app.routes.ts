import { Routes } from '@angular/router';

import { Interpolation } from './01-interpolation/interpolation';
import { PropertyBinding } from './02-property-binding/property-binding';
import { EventBinding } from "./03-event-binding/event-binding";
import { LocalVariable } from "./04-local-variable/local-variable";
import { ControlFlowIf } from "./05-control-flow-if/control-flow-if";
import { ControlFlowFor } from "./06-control-flow-for/control-flow-for";
import { ControlFlowSwitch } from "./07-control-flow-switch/control-flow-switch";
import { TemplateVariable } from "./08-template-variable/template-variable";
import { StructuralDirectives } from "./09-structural-directives/structural-directives";
import { TemplateDirectives } from "./10-template-directives/template-directives";

export const routes: Routes = [
  { path: '01-interpolation', component: Interpolation },
  { path: '02-property-binding', component: PropertyBinding },
  { path: '03-event-binding', component: EventBinding },
  { path: '04-local-variables', component: LocalVariable },
  { path: '05-control-flow-if', component: ControlFlowIf },
  { path: '06-control-flow-for', component: ControlFlowFor },
  { path: '07-control-flow-switch', component: ControlFlowSwitch },
  { path: '08-template-variable', component: TemplateVariable },
  { path: '09-structural-directives', component: StructuralDirectives },
  { path: '10-template-directives', component: TemplateDirectives}
];
