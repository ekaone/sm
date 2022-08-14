import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";

const InputPenawaran = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            Penawaran Harga Pekerjaan{" "}
            <strong>Supply Instalasi Chiller 20Kwh</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Masukan Penawaran Harga Anda sebaelum PPN 11%
            </p>

            <CForm>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Harga Penawaran
                </CFormLabel>
                <CCol sm={10}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>Rp.</CInputGroupText>
                    <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Terbilang
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="password" id="inputPassword3" />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Keterangan
                </CFormLabel>
                <CCol sm={10}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></CFormTextarea>
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Dokumen Penawaran
                </CFormLabel>
                <CCol sm={10}>
                  <CFormLabel htmlFor="formFile">
                    Upload Surat Penawaran harga, Format dalam{" "}
                    <strong>.pdf</strong>
                  </CFormLabel>
                  <CFormInput type="file" id="formFile" />
                </CCol>
              </CRow>
              <CButton type="submit" color="success">
                Submit
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default InputPenawaran;
