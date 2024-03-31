import { LightIconButton } from 'tsup.ui.index';
import styled from '@emotion/styled';

import { IconCopy } from '@/ui/display/icon';
import { useSnackBar } from '@/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { useTheme } from '@emotion/react';

const StyledButtonContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(1)};
`;

export type LightCopyIconButtonProps = {
  copyText: string;
};

export const LightCopyIconButton = ({
  copyText
}: LightCopyIconButtonProps) => {
  const { enqueueSnackBar } = useSnackBar();
  const theme = useTheme();

  return (
      <StyledButtonContainer>
        <LightIconButton
            className='copy-button'
            Icon={IconCopy}
            onClick={() => {
              enqueueSnackBar('Text copied to clipboard', {
                variant: 'success',
                icon: <IconCopy size={theme.icon.size.md} />,
                duration: 2000,
              });
              navigator.clipboard.writeText(copyText);
            }}
            aria-label="Copy to Clipboard"
        />
      </StyledButtonContainer>
  );
};