import React from "react";
import {
  CCardHeader,
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CButton,
} from "@coreui/react";

const InformasiPekerjaan = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Informasi Pekerjaan</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>Kode Tender</CTableDataCell>
                <CTableDataCell>RFQ 023.5467</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>Nama Tender</CTableDataCell>
                <CTableDataCell>Supply Instalasi Chiller 20Kwh</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>Deskripsi Pekerjaan</CTableDataCell>
                <CTableDataCell>
                  Supply dan Instalasi Chiller 20Kwh di Gedung Perpustakaan
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>Jangka Waktu Pelaksanaan</CTableDataCell>
                <CTableDataCell>60 Hari</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Download Dokumen RKS</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>RKS Administrasi</CTableDataCell>
                <CTableDataCell>
                  <strong>RKS.pdf</strong>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>Gambar Perencanaan</CTableDataCell>
                <CTableDataCell>Layout.pdf</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>RKS Teknis</CTableDataCell>
                <CTableDataCell>RKS_Teknis.pdf</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>BOQ</CTableDataCell>
                <CTableDataCell>BOQ.pdf</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      <CButton color="success">Daftar Lelang</CButton>
    </>
  );
};

export default InformasiPekerjaan;
