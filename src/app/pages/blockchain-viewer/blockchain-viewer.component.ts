import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {
  publi blocks = []

  constructor(private blockchainService: BlockchainService) { 
    this.blocks = blockchainService.getBlocks()
  }

  ngOnInit(): void {
  }

}
