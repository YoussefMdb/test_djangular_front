import { Component } from '@angular/core';
import { DocumentsService } from 'src/app/documents.service';
import { LabelsService } from 'src/app/labels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  labels: any | undefined;
  documents: any | undefined;

  constructor(
    private labelService: LabelsService,
    private documentService: DocumentsService
  ) {}

  ngOnInit(): void {
    this.labelService.getLabels().subscribe((data) => {
      this.labels = data;
      // console.log(data);
    });
    this.documentService.getDocuments().subscribe((data) => {
      this.documents = data;
      // console.log(data);
    });
  }

  deleteLabel(id: number) {
    this.labelService.deleteLabelById(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit(); // refresh
    });
  }

  deleteDocument(id: number) {
    this.documentService.deleteDocumentById(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  annotateDocument(id: number) {
    this.documentService.selectDocumentById(id).subscribe((data) => {
      const selObj = window.getSelection();
      var indexDoc = 0;
      if (selObj) {
        const selRange = selObj.getRangeAt(0);
        const startIndex = selRange.startOffset;
        const endIndex = selRange.endOffset;
        const partToAnnotate =
          selRange.commonAncestorContainer.nodeValue?.slice(
            startIndex,
            endIndex
          );
        const firstSide = selRange.commonAncestorContainer.nodeValue?.slice(
          0,
          startIndex
        );
        const lastSide = selRange.commonAncestorContainer.nodeValue?.slice(
          endIndex,
          selRange.commonAncestorContainer.nodeValue?.length
        );
        const myContent = document.querySelectorAll('span.contentBox');
        for (let i = 0; i < myContent.length; i++) {
          var subSentance = myContent[i].textContent;
          if (partToAnnotate) {
            if (subSentance?.includes(partToAnnotate)) {
              indexDoc = i;
            }
          }
        }
        const docToModify =
          document.querySelectorAll('span.contentBox')[indexDoc];
        if (firstSide) {
          docToModify.innerHTML = '';
          docToModify.innerHTML = firstSide;
          let spanElement = document.createElement('span');
          spanElement.classList.add('contentBox');

          this.labelService.getLabels().subscribe((data) => {
            var labelList = data;
            const selectedLabelNameChecker =
              document.getElementById('selectedLabelName');

            docToModify.insertAdjacentElement('afterend', spanElement);
            if (partToAnnotate) {
              spanElement.innerHTML = partToAnnotate;
              let appendingLabel = document.createElement('span');
              appendingLabel.innerHTML += selectedLabelNameChecker?.textContent;
              appendingLabel.style.backgroundColor = 'white';
              appendingLabel.style.borderRadius = '10px';
              appendingLabel.style.paddingLeft = '5px';
              appendingLabel.style.paddingRight = '5px';
              appendingLabel.style.fontWeight = 'bold';
              spanElement.insertAdjacentElement('beforeend', appendingLabel);
              const selectedLabelColorChecker =
                document.getElementById('selectedLabelColor');
              const theColor =
                selectedLabelColorChecker?.textContent?.toLowerCase();
              spanElement.style.backgroundColor = `${theColor}`;

              spanElement.style.borderRadius = '10px';
              spanElement.style.padding = '5px';
              spanElement.style.paddingRight = '15px';
              spanElement.style.marginRight = '5px';
              spanElement.style.marginLeft = '5px';
              let lastSpanElement = document.createElement('span');
              lastSpanElement.classList.add('contentBox');
              spanElement.insertAdjacentElement('afterend', lastSpanElement);
              if (lastSide) {
                lastSpanElement.innerHTML = lastSide;
              }
            }
          });
        }
      }
    });
  }

  getJson(id: number) {
    // Code
  }

  selectLabel(id: number) {
    this.labelService.selectLabelById(id).subscribe((data) => {
      // this.ngOnInit();
      var colorForHighlight = data.color;
      var selectedLabelName = data.name;

      const selectedLabel = document.getElementById('selectedLabel');
      if (selectedLabel) {
        selectedLabel.innerHTML = '';
        selectedLabel.innerHTML = 'Selected Label :';
        selectedLabel.innerHTML += `<li id="selectedLabelName">${selectedLabelName}</li>`;
        selectedLabel.innerHTML += `<li id="selectedLabelColor">${colorForHighlight}</li>`;
      }

      // let selectedLabelColor = document.createElement('span');
      // selectedLabelColor.innerHTML = colorForHighlight;
      // selectedLabel?.insertAdjacentElement('afterend', selectedLabelColor);
      // console.log(selectedLabel?.textContent);
    });
  }
}
