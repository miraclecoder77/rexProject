import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileGenerationService, IPagerContent } from '@ga/dynamic-table';
import { PaginationService } from 'src/app/shared/dynamic-table/pagination.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
    // Filters
      filters;
      filterValues;
    // Pagination
     paginationValues: IPagerContent = {
      pageSize: 10,
      pageIndex: 0,
      currentPage: 1,
      paginationType: 0,
  };
        // Modals
        showCreateBranchModal: boolean = false;
        showUpdateBranchModal: boolean = false;
    
        // Selected branch
        // selectedBranchForUpdate: Partial<Store>;
    
        // Data
        // stores$: Observable<Store[]>;
        // count$: Observable<number>;
    
        // Download CSV headers
        downloadCSvheaders = [];
        // Subscriptions handler
        // subscriptions: Subscription[] = [];
    

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    // this.getStores()
  }

  setPager(paginationValues) {
    // Store pagination values in this component
    this.paginationValues = paginationValues;

    // this.getStores();
}

setFilters(filters) {
    // Store filter values in this component
    this.filterValues = filters;

    this.paginationValues.pageIndex = 0;
    this.paginationValues.currentPage = 1;
}

toggleCreateBranchModal() {
    this.showCreateBranchModal = !this.showCreateBranchModal;
}

toggleUpdateBranchModal() {
    this.showUpdateBranchModal = !this.showUpdateBranchModal;
}

ngOnDestroy() {
    // this.subscriptions.forEach((sub) => sub.unsubscribe());
}

}
