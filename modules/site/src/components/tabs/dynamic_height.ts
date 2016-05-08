import {Component, ViewEncapsulation} from "@angular/core";
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
  selector: 'tabs-dynamic-height',
  templateUrl: 'src/components/tabs/dynamic_height.html',
  styleUrls: ['src/components/tabs/dynamic_height.css'],
  directives: [MATERIAL_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})
export default class TabsDynamicHeight {
}