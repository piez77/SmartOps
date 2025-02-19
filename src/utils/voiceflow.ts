export const openVoiceflowAssistant = () => {
  if (window.voiceflow?.chat?.open) {
    window.voiceflow.chat.open();
  }
};