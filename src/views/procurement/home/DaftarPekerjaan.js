import React from "react";
import {
  CCardHeader,
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

const DaftarPekerjaan = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Tender Bakrie Group Divisi IT</CCardHeader>
        <CCardBody>
          <p>Daftar Pekerjaan</p>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">No. RFQ</CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  Subyek Pekerjaan
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  Tanggal Pendaftaran
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  Tanggal Penutupan
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  Pembukaan Penawaran
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>RFQ 023.5467</CTableDataCell>
                <CTableDataCell>Supply Instalasi Chiller 20Kwh</CTableDataCell>
                <CTableDataCell>15 Oktober 2022</CTableDataCell>
                <CTableDataCell>20 Oktober 2022</CTableDataCell>
                <CTableDataCell>21 Oktober 2022</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>RFQ 063.8743</CTableDataCell>
                <CTableDataCell>Splinker Gedung Arsip</CTableDataCell>
                <CTableDataCell>17 Agustus 2022</CTableDataCell>
                <CTableDataCell>22 Agustus 2022</CTableDataCell>
                <CTableDataCell>23 Agustus 2022</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>RFQ 023.4445</CTableDataCell>
                <CTableDataCell>Pengadaan ATK Divisi IT</CTableDataCell>
                <CTableDataCell>10 Sepetember 2022</CTableDataCell>
                <CTableDataCell>15 Sepetember 2022</CTableDataCell>
                <CTableDataCell>16 Sepetember 2022</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  );
};

export default DaftarPekerjaan;
