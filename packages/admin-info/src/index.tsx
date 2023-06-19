import styled from 'styled-components';

import { ApplicationSettingsIcon } from '@ui/icon';

const SInfo = styled.div`
  align-items: center;
  display: flex;
  font-family: Roboto, sans-serif;
  font-size: 12px !important;
  letter-spacing: 0.11px;
  line-height: 14px;
  padding: 5px 0;
  width: 100%;
`;

const SIcon = styled(ApplicationSettingsIcon)`
  margin-left: 20px;
  margin-right: 10px;
`;

const SBoldText = styled.b`
  font-weight: 600;
  font-size: 12px;
`;

const AdminInfo = () => (
  <div>
    <SInfo data-test="admin-message">
      <SIcon size="12" />
      <SBoldText>You are in the Admin Area. </SBoldText> &nbsp;All changes may
      have significant effect on the customers.
    </SInfo>
  </div>
);

export default AdminInfo;
