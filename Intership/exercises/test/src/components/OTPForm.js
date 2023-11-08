import React, { useState } from 'react';
import { Div, Inputs, Input } from './styledCM';
export default function OTPForm() {
  return (
    <Div>
      <Inputs>
        <Input min={0} max={9} onInput={e => e.target.value.maxlength === e.target.value.length ? e.target.value : null} type='number' maxlength={1} />
        <Input min={0} max={9} onInput={e => e.target.value.maxlength === e.target.value.length ? e.target.value : null} type='number' maxlength={1} />
        <Input min={0} max={9} onInput={e => e.target.value.maxlength === e.target.value.length ? e.target.value : null} type='number' maxlength={1} />
        <Input min={0} max={9} onInput={e => e.target.value.maxlength === e.target.value.length ? e.target.value : null} type='number' maxlength={1} />
      </Inputs>
    </Div>
  );
}